import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import CursorGlow from '@/components/CursorGlow';
import { AlertCircle } from 'lucide-react';

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        if (session.user.email_confirmed_at) {
          navigate('/dashboard');
        }
      }
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user && session.user.email_confirmed_at) {
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLoginView) {
        // Login
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user && !data.user.email_confirmed_at) {
          setError('Please verify your email address before logging in. Check your inbox for the verification link.');
          await supabase.auth.signOut();
          setIsLoading(false);
          return;
        }

        toast({
          title: "Login successful!",
          description: "Welcome back to Sara.",
        });

        navigate('/Home');
      } else {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              full_name: fullName,
              roll_number: rollNumber,
              year,
              branch,
            },
          },
        });

        if (error) throw error;

        toast({
          title: "Account created!",
          description: "A verification email has been sent to your email address. Please verify it to log in.",
          duration: 8000,
        });

        // Clear form
        setEmail('');
        setPassword('');
        setFullName('');
        setRollNumber('');
        setYear('');
        setBranch('');
        
        // Switch to login view
        setIsLoginView(true);
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      setError(error.message || 'An error occurred during authentication');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError('');
  };

  return (
    <>
      <CursorGlow />
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="text-4xl font-bold gradient-text hover:opacity-80 transition-opacity">
              Sara
            </Link>
            <p className="text-foreground/60 mt-2 font-inter">
              {isLoginView 
                ? "Welcome back to your AI-powered university companion" 
                : "Join thousands of students already succeeding with AI"
              }
            </p>
          </div>

          <Card className="feature-window">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text font-inter">
                {isLoginView ? "Welcome Back to Sara" : "Create Your Sara Account"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLoginView && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground font-medium">
                        Full Name
                      </Label>
                      <Input 
                        id="fullName" 
                        type="text" 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-[hsl(var(--glass-bg)/0.8)] border-[hsl(var(--glass-border)/0.3)] focus:border-[hsl(var(--glass-border))] transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="rollNumber" className="text-foreground font-medium">
                        Roll Number / Student ID
                      </Label>
                      <Input 
                        id="rollNumber" 
                        type="text" 
                        required 
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        className="bg-[hsl(var(--glass-bg)/0.8)] border-[hsl(var(--glass-border)/0.3)] focus:border-[hsl(var(--glass-border))] transition-all duration-300"
                      />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    University Email Address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@university.edu" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[hsl(var(--glass-bg)/0.8)] border-[hsl(var(--glass-border)/0.3)] focus:border-[hsl(var(--glass-border))] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    Password
                  </Label>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[hsl(var(--glass-bg)/0.8)] border-[hsl(var(--glass-border)/0.3)] focus:border-[hsl(var(--glass-border))] transition-all duration-300"
                  />
                  {isLoginView && (
                    <div className="text-right">
                      <Link 
                        to="/forgot-password" 
                        className="text-sm text-[hsl(var(--gradient-start))] hover:text-[hsl(var(--gradient-middle))] transition-colors"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  )}
                </div>

                {!isLoginView && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-foreground font-medium">
                        Year of Study
                      </Label>
                      <Select required value={year} onValueChange={setYear}>
                        <SelectTrigger className="bg-[hsl(var(--glass-bg)/0.8)] border-[hsl(var(--glass-border)/0.3)] focus:border-[hsl(var(--glass-border))] transition-all duration-300">
                          <SelectValue placeholder="Select your year" />
                        </SelectTrigger>
                        <SelectContent className="bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border)/0.3)] backdrop-blur-xl">
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="4th">4th Year</SelectItem>
                          <SelectItem value="5th">5th Year</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="branch" className="text-foreground font-medium">
                        Branch / Major
                      </Label>
                      <Select required value={branch} onValueChange={setBranch}>
                        <SelectTrigger className="bg-[hsl(var(--glass-bg)/0.8)] border-[hsl(var(--glass-border)/0.3)] focus:border-[hsl(var(--glass-border))] transition-all duration-300">
                          <SelectValue placeholder="Select your major" />
                        </SelectTrigger>
                        <SelectContent className="bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border)/0.3)] backdrop-blur-xl">
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                          <SelectItem value="electrical">Electrical Engineering</SelectItem>
                          <SelectItem value="civil">Civil Engineering</SelectItem>
                          <SelectItem value="chemical">Chemical Engineering</SelectItem>
                          <SelectItem value="business">Business Administration</SelectItem>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <Button 
                  type="submit" 
                  className="w-full cta-button mt-6" 
                  disabled={isLoading}
                >
                  {isLoading 
                    ? (isLoginView ? "Signing In..." : "Creating Account...") 
                    : (isLoginView ? "Log In" : "Create Account")
                  }
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-foreground/60 text-sm font-inter">
                  {isLoginView ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    onClick={toggleView}
                    className="text-[hsl(var(--gradient-start))] hover:text-[hsl(var(--gradient-middle))] font-semibold transition-colors cursor-pointer"
                  >
                    {isLoginView ? "Sign Up" : "Log In"}
                  </button>
                </p>
              </div>

              {!isLoginView && (
                <div className="mt-6 text-center text-xs text-foreground/50 font-inter">
                  By continuing, you agree to our{' '}
                  <Link to="/terms" className="text-[hsl(var(--gradient-start))] hover:underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-[hsl(var(--gradient-start))] hover:underline">
                    Privacy Policy
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <Link 
              to="/" 
              className="text-foreground/60 hover:text-foreground transition-colors text-sm font-inter"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;