import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import CursorGlow from '@/components/CursorGlow';
import { User } from '@supabase/supabase-js';
import { AlertCircle, LogOut, Mail, User as UserIcon, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/login');
        return;
      }

      setUser(session.user);
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const handleResendVerification = async () => {
    if (!user?.email) return;

    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: user.email,
    });

    if (!error) {
      alert('Verification email sent! Please check your inbox.');
    }
  };

  if (loading) {
    return (
      <>
        <CursorGlow />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[hsl(var(--gradient-start))]"></div>
            <p className="mt-4 text-foreground/60">Loading...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CursorGlow />
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold gradient-text">Sara Dashboard</h1>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="nav-button"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {user && !user.email_confirmed_at && (
            <Alert className="mb-6 border-yellow-500/50 bg-yellow-500/10">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <AlertDescription className="text-foreground">
                <div className="flex items-center justify-between">
                  <span>
                    Please verify your email address to access all features.
                  </span>
                  <Button
                    onClick={handleResendVerification}
                    variant="outline"
                    size="sm"
                    className="ml-4"
                  >
                    Resend Email
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}

          <Card className="feature-window">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">Email</span>
                  </div>
                  <p className="text-foreground font-medium">{user?.email}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <UserIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">User ID</span>
                  </div>
                  <p className="text-foreground font-mono text-sm">{user?.id.substring(0, 8)}...</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">Account Created</span>
                  </div>
                  <p className="text-foreground">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground/60">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Verification Status</span>
                  </div>
                  <p className="text-foreground">
                    {user?.email_confirmed_at ? (
                      <span className="text-green-500 font-medium">✓ Verified</span>
                    ) : (
                      <span className="text-yellow-500 font-medium">⚠ Pending Verification</span>
                    )}
                  </p>
                </div>
              </div>

              {user?.user_metadata && Object.keys(user.user_metadata).length > 0 && (
                <div className="pt-6 border-t border-[hsl(var(--glass-border)/0.3)]">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Additional Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {user.user_metadata.full_name && (
                      <div className="space-y-2">
                        <span className="text-sm text-foreground/60">Full Name</span>
                        <p className="text-foreground font-medium">{user.user_metadata.full_name}</p>
                      </div>
                    )}
                    {user.user_metadata.roll_number && (
                      <div className="space-y-2">
                        <span className="text-sm text-foreground/60">Roll Number</span>
                        <p className="text-foreground font-medium">{user.user_metadata.roll_number}</p>
                      </div>
                    )}
                    {user.user_metadata.year && (
                      <div className="space-y-2">
                        <span className="text-sm text-foreground/60">Year of Study</span>
                        <p className="text-foreground font-medium">{user.user_metadata.year}</p>
                      </div>
                    )}
                    {user.user_metadata.branch && (
                      <div className="space-y-2">
                        <span className="text-sm text-foreground/60">Branch/Major</span>
                        <p className="text-foreground font-medium">{user.user_metadata.branch}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
