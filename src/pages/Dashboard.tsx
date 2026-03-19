import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2, 
  TrendingUp,
  Calendar,
  CheckCircle,
  Lock,
  Save,
  X,
  ChevronLeft,
  ExternalLink,
  Download,
  Upload
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
}

const DEFAULT_PASSWORD = 'athena2026';

const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Nail Trends Taking Over 2026',
    excerpt: 'From chrome finishes to 3D floral designs, discover the hottest nail trends that are dominating social media this year.',
    content: 'Nail art is constantly evolving, and 2026 is bringing some exciting trends to the forefront...',
    date: 'March 1, 2026',
    readTime: '4 min read',
    category: 'Trends',
    image: '/work5.jpg',
    featured: true,
  },
  {
    id: '2',
    title: 'Builder Gel vs Acrylic Nails: Which One Is Right for You?',
    excerpt: 'When choosing a nail enhancement, many clients ask the same question: builder gel or acrylic nails — which one is better?',
    content: 'When choosing a nail enhancement, many clients ask the same question...',
    date: 'February 28, 2026',
    readTime: '6 min read',
    category: 'Education',
    image: '/work3.jpg',
  },
  {
    id: '3',
    title: 'The Secret to Long-Lasting Manicures',
    excerpt: 'Ever wonder why some manicures last two weeks while others chip in days? Discover the professional secrets to making your nails last.',
    content: 'The secret to long-lasting manicures starts with proper preparation...',
    date: 'February 25, 2026',
    readTime: '5 min read',
    category: 'Tips',
    image: '/work6.jpg',
  },
  {
    id: '4',
    title: 'Builder Gel in Denton, TX: Stronger Natural Nails with a Lightweight Finish',
    excerpt: 'For clients looking to strengthen their natural nails without the weight of traditional acrylics, builder gel is the perfect solution.',
    content: 'For clients looking to strengthen their natural nails...',
    date: 'February 24, 2026',
    readTime: '5 min read',
    category: 'Education',
    image: '/work2.jpg',
  },
  {
    id: '5',
    title: 'Acrylic Nails in Denton, TX: Bold, Beautiful, and Built to Last',
    excerpt: 'For clients who want dramatic length, bold shapes, and long-lasting durability, acrylic nails remain one of the most popular choices.',
    content: 'For clients who want dramatic length, bold shapes...',
    date: 'February 23, 2026',
    readTime: '5 min read',
    category: 'Education',
    image: '/work1.jpg',
  },
  {
    id: '6',
    title: 'Dip Powder Nails in Denton, TX: Durable Nails with a Clean, Elegant Finish',
    excerpt: 'For clients who want beautiful nails that are strong, long-lasting, and polished, dip powder nails are an excellent choice.',
    content: 'For clients who want beautiful nails that are strong...',
    date: 'February 22, 2026',
    readTime: '5 min read',
    category: 'Education',
    image: '/work4.jpg',
  },
  {
    id: '7',
    title: 'Nail Shaping 101: Finding Your Perfect Shape',
    excerpt: 'The shape of your nails can completely transform your look. Learn about different nail shapes and which one suits you best.',
    content: 'From almond to coffin to stiletto, each nail shape...',
    date: 'February 20, 2026',
    readTime: '4 min read',
    category: 'Education',
    image: '/work7.jpg',
  },
  {
    id: '8',
    title: 'Cuticle Care 101: The Foundation of Healthy Nails',
    excerpt: 'Healthy nails start with healthy cuticles. Learn why cuticle care matters and how to maintain them between appointments.',
    content: 'Cuticles serve as a protective barrier for your nail matrix...',
    date: 'February 15, 2026',
    readTime: '4 min read',
    category: 'Education',
    image: '/work8.jpg',
  },
  {
    id: '9',
    title: 'Nail Art Trends for 2026',
    excerpt: 'Get inspired by the most creative nail art trends of the year, from minimalist designs to bold statement pieces.',
    content: 'This year is all about self-expression through nail art...',
    date: 'February 10, 2026',
    readTime: '5 min read',
    category: 'Trends',
    image: '/work2.jpg',
  },
  {
    id: '10',
    title: 'Welcome to Athena\'s Beauty: Your Private Nail Sanctuary in Denton, TX',
    excerpt: 'Discover a new kind of nail experience where artistry meets tranquility in a private studio setting.',
    content: 'Welcome to Athena\'s Beauty...',
    date: 'February 1, 2026',
    readTime: '3 min read',
    category: 'Studio',
    image: '/studio_interior.jpg',
    featured: true,
  },
];

const INITIAL_SERVICES: Service[] = [
  { id: '1', name: 'Classic Manicure', description: 'Traditional nail care with cuticle work, shaping, and polish', price: '$35', duration: '45 min', category: 'Manicures' },
  { id: '2', name: 'Gel Manicure', description: 'Long-lasting gel polish with chip-free wear', price: '$50', duration: '60 min', category: 'Manicures' },
  { id: '3', name: 'Builder Gel Overlay', description: 'Strengthen natural nails with durable builder gel', price: '$65', duration: '75 min', category: 'Enhancements' },
  { id: '4', name: 'Acrylic Full Set', description: 'Classic acrylic extensions with your choice of shape', price: '$75', duration: '90 min', category: 'Enhancements' },
  { id: '5', name: 'Dip Powder Nails', description: 'Strong, lightweight powder nails in any color', price: '$60', duration: '60 min', category: 'Enhancements' },
  { id: '6', name: 'Nail Art - Basic', description: 'Simple designs, accents, or French tips', price: '$10+', duration: '15 min', category: 'Add-ons' },
  { id: '7', name: 'Nail Art - Advanced', description: 'Intricate designs, 3D elements, or full coverage art', price: '$25+', duration: '30 min', category: 'Add-ons' },
  { id: '8', name: 'Soak Off/Removal', description: 'Safe removal of existing product', price: '$20', duration: '30 min', category: 'Add-ons' },
];

const GALLERY_IMAGES = [
  { id: '1', src: '/work1.jpg', title: 'Pink Marble Design' },
  { id: '2', src: '/work2.jpg', title: 'French Tips' },
  { id: '3', src: '/work3.jpg', title: 'Glitter Accent' },
  { id: '4', src: '/work4.jpg', title: 'Nude Elegance' },
  { id: '5', src: '/work5.jpg', title: 'Chrome Finish' },
  { id: '6', src: '/work6.jpg', title: 'Floral Art' },
  { id: '7', src: '/work7.jpg', title: 'Geometric Design' },
  { id: '8', src: '/work8.jpg', title: 'Classic Red' },
];

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    // Load data from localStorage or use initial data
    const savedPosts = localStorage.getItem('athena_blog_posts');
    const savedServices = localStorage.getItem('athena_services');
    
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    } else {
      setBlogPosts(INITIAL_BLOG_POSTS);
    }
    
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      setServices(INITIAL_SERVICES);
    }

    // Check if already authenticated
    const authStatus = sessionStorage.getItem('athena_dashboard_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('athena_dashboard_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('athena_dashboard_auth');
    setPassword('');
  };

  const saveToLocalStorage = (posts: BlogPost[], svcs: Service[]) => {
    localStorage.setItem('athena_blog_posts', JSON.stringify(posts));
    localStorage.setItem('athena_services', JSON.stringify(svcs));
    setSaveMessage('Changes saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleAddPost = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: '',
      excerpt: '',
      content: '',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      category: 'Education',
      image: '/work1.jpg',
    };
    setEditingPost(newPost);
    setIsPostDialogOpen(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost({ ...post });
    setIsPostDialogOpen(true);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updated = blogPosts.filter(p => p.id !== id);
      setBlogPosts(updated);
      saveToLocalStorage(updated, services);
    }
  };

  const handleSavePost = () => {
    if (!editingPost) return;
    
    const updated = editingPost.id && blogPosts.find(p => p.id === editingPost.id)
      ? blogPosts.map(p => p.id === editingPost.id ? editingPost : p)
      : [...blogPosts, editingPost];
    
    setBlogPosts(updated);
    saveToLocalStorage(updated, services);
    setIsPostDialogOpen(false);
    setEditingPost(null);
  };

  const handleAddService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      name: '',
      description: '',
      price: '',
      duration: '',
      category: 'Manicures',
    };
    setEditingService(newService);
    setIsServiceDialogOpen(true);
  };

  const handleEditService = (service: Service) => {
    setEditingService({ ...service });
    setIsServiceDialogOpen(true);
  };

  const handleDeleteService = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const updated = services.filter(s => s.id !== id);
      setServices(updated);
      saveToLocalStorage(blogPosts, updated);
    }
  };

  const handleSaveService = () => {
    if (!editingService) return;
    
    const updated = editingService.id && services.find(s => s.id === editingService.id)
      ? services.map(s => s.id === editingService.id ? editingService : s)
      : [...services, editingService];
    
    setServices(updated);
    saveToLocalStorage(blogPosts, updated);
    setIsServiceDialogOpen(false);
    setEditingService(null);
  };

  const exportData = () => {
    const data = {
      blogPosts,
      services,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `athenas-beauty-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.blogPosts) {
          setBlogPosts(data.blogPosts);
          localStorage.setItem('athena_blog_posts', JSON.stringify(data.blogPosts));
        }
        if (data.services) {
          setServices(data.services);
          localStorage.setItem('athena_services', JSON.stringify(data.services));
        }
        setSaveMessage('Data imported successfully!');
        setTimeout(() => setSaveMessage(''), 3000);
      } catch (error) {
        alert('Error importing data. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#E5B84C] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-10 h-10 text-[#0A0A0A]" />
            </div>
            <h1 className="text-3xl font-bold text-[#E5B84C] mb-2">Athena's Beauty</h1>
            <p className="text-[#F5F5F5]/70">Admin Dashboard</p>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#E5B84C]/20">
            {loginError && (
              <Alert className="mb-4 bg-red-500/10 border-red-500/30 text-red-400">
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="password" className="text-[#F5F5F5]">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="Enter dashboard password"
                  className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5] placeholder:text-[#F5F5F5]/40"
                />
              </div>
              
              <Button
                onClick={handleLogin}
                className="w-full bg-[#E5B84C] text-[#0A0A0A] hover:bg-[#E5B84C]/90 font-semibold"
              >
                Access Dashboard
              </Button>
            </div>
            
            <p className="text-center text-sm text-[#F5F5F5]/50 mt-4">
              Default password: athena2026
            </p>
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={() => window.location.hash = ''}
              className="text-[#E5B84C] hover:underline text-sm inline-flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <header className="bg-[#1A1A1A] border-b border-[#E5B84C]/20 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#E5B84C] rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-[#0A0A0A]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#E5B84C]">Athena's Beauty</h1>
                <p className="text-xs text-[#F5F5F5]/50">Admin Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/', '_blank')}
                className="border-[#E5B84C]/30 text-[#F5F5F5] hover:bg-[#E5B84C]/10 hidden sm:flex"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Site
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-[#E5B84C]/30 text-[#F5F5F5] hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1A1A1A] border-r border-[#E5B84C]/20 min-h-[calc(100vh-73px)] hidden lg:block">
          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-[#E5B84C]/20 text-[#E5B84C]' 
                  : 'text-[#F5F5F5]/70 hover:bg-[#E5B84C]/10 hover:text-[#F5F5F5]'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Overview
            </button>
            
            <button
              onClick={() => setActiveTab('blog')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'blog' 
                  ? 'bg-[#E5B84C]/20 text-[#E5B84C]' 
                  : 'text-[#F5F5F5]/70 hover:bg-[#E5B84C]/10 hover:text-[#F5F5F5]'
              }`}
            >
              <FileText className="w-5 h-5" />
              Blog Posts
              <span className="ml-auto bg-[#E5B84C]/20 text-[#E5B84C] text-xs px-2 py-0.5 rounded-full">
                {blogPosts.length}
              </span>
            </button>
            
            <button
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'services' 
                  ? 'bg-[#E5B84C]/20 text-[#E5B84C]' 
                  : 'text-[#F5F5F5]/70 hover:bg-[#E5B84C]/10 hover:text-[#F5F5F5]'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Services
              <span className="ml-auto bg-[#E5B84C]/20 text-[#E5B84C] text-xs px-2 py-0.5 rounded-full">
                {services.length}
              </span>
            </button>
            
            <button
              onClick={() => setActiveTab('gallery')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'gallery' 
                  ? 'bg-[#E5B84C]/20 text-[#E5B84C]' 
                  : 'text-[#F5F5F5]/70 hover:bg-[#E5B84C]/10 hover:text-[#F5F5F5]'
              }`}
            >
              <Image className="w-5 h-5" />
              Gallery
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-[#E5B84C]/20 text-[#E5B84C]' 
                  : 'text-[#F5F5F5]/70 hover:bg-[#E5B84C]/10 hover:text-[#F5F5F5]'
              }`}
            >
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </nav>
        </aside>

        {/* Mobile Tabs */}
        <div className="lg:hidden w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-[#1A1A1A] rounded-none border-b border-[#E5B84C]/20 p-0 h-auto">
              <TabsTrigger value="overview" className="flex-1 py-3 data-[state=active]:bg-[#E5B84C]/20 data-[state=active]:text-[#E5B84C]">
                <LayoutDashboard className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex-1 py-3 data-[state=active]:bg-[#E5B84C]/20 data-[state=active]:text-[#E5B84C]">
                <FileText className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="services" className="flex-1 py-3 data-[state=active]:bg-[#E5B84C]/20 data-[state=active]:text-[#E5B84C]">
                <CheckCircle className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex-1 py-3 data-[state=active]:bg-[#E5B84C]/20 data-[state=active]:text-[#E5B84C]">
                <Image className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1 py-3 data-[state=active]:bg-[#E5B84C]/20 data-[state=active]:text-[#E5B84C]">
                <Settings className="w-4 h-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {saveMessage && (
            <Alert className="mb-6 bg-green-500/10 border-green-500/30 text-green-400">
              <AlertDescription>{saveMessage}</AlertDescription>
            </Alert>
          )}

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#F5F5F5]">Dashboard Overview</h2>
                <span className="text-[#F5F5F5]/50 text-sm">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#F5F5F5]/70">Total Blog Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#E5B84C]">{blogPosts.length}</span>
                      <FileText className="w-8 h-8 text-[#E5B84C]/30" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#F5F5F5]/70">Services Offered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#E5B84C]">{services.length}</span>
                      <CheckCircle className="w-8 h-8 text-[#E5B84C]/30" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#F5F5F5]/70">Gallery Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#E5B84C]">{GALLERY_IMAGES.length}</span>
                      <Image className="w-8 h-8 text-[#E5B84C]/30" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#F5F5F5]/70">Featured Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#E5B84C]">
                        {blogPosts.filter(p => p.featured).length}
                      </span>
                      <TrendingUp className="w-8 h-8 text-[#E5B84C]/30" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader>
                    <CardTitle className="text-[#F5F5F5]">Recent Blog Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {blogPosts.slice(0, 5).map(post => (
                        <div key={post.id} className="flex items-center justify-between p-3 bg-[#0A0A0A] rounded-lg">
                          <div className="flex-1 min-w-0">
                            <p className="text-[#F5F5F5] font-medium truncate">{post.title}</p>
                            <p className="text-[#F5F5F5]/50 text-sm">{post.date}</p>
                          </div>
                          {post.featured && (
                            <span className="ml-2 bg-[#E5B84C]/20 text-[#E5B84C] text-xs px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader>
                    <CardTitle className="text-[#F5F5F5]">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        onClick={() => setActiveTab('blog')}
                        className="bg-[#E5B84C]/10 text-[#E5B84C] hover:bg-[#E5B84C]/20 border border-[#E5B84C]/30"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        New Post
                      </Button>
                      <Button
                        onClick={() => setActiveTab('services')}
                        className="bg-[#E5B84C]/10 text-[#E5B84C] hover:bg-[#E5B84C]/20 border border-[#E5B84C]/30"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        New Service
                      </Button>
                      <Button
                        onClick={exportData}
                        variant="outline"
                        className="border-[#E5B84C]/30 text-[#F5F5F5] hover:bg-[#E5B84C]/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export Data
                      </Button>
                      <Button
                        onClick={() => window.open('https://booksy.com', '_blank')}
                        variant="outline"
                        className="border-[#E5B84C]/30 text-[#F5F5F5] hover:bg-[#E5B84C]/10"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Booksy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Blog Tab */}
          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#F5F5F5]">Blog Posts</h2>
                <Button
                  onClick={handleAddPost}
                  className="bg-[#E5B84C] text-[#0A0A0A] hover:bg-[#E5B84C]/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Post
                </Button>
              </div>

              <div className="grid gap-4">
                {blogPosts.map(post => (
                  <div
                    key={post.id}
                    className="bg-[#1A1A1A] border border-[#E5B84C]/20 rounded-lg p-4 flex items-start gap-4"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-[#F5F5F5] font-semibold truncate">{post.title}</h3>
                          <p className="text-[#F5F5F5]/50 text-sm mt-1">{post.excerpt}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-[#F5F5F5]/40">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                            <span className="bg-[#E5B84C]/10 text-[#E5B84C] px-2 py-0.5 rounded">
                              {post.category}
                            </span>
                            {post.featured && (
                              <span className="bg-[#E5B84C]/20 text-[#E5B84C] px-2 py-0.5 rounded">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditPost(post)}
                        className="text-[#F5F5F5]/70 hover:text-[#E5B84C] hover:bg-[#E5B84C]/10"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-[#F5F5F5]/70 hover:text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#F5F5F5]">Services</h2>
                <Button
                  onClick={handleAddService}
                  className="bg-[#E5B84C] text-[#0A0A0A] hover:bg-[#E5B84C]/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Service
                </Button>
              </div>

              <div className="grid gap-4">
                {services.map(service => (
                  <div
                    key={service.id}
                    className="bg-[#1A1A1A] border border-[#E5B84C]/20 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold">{service.name}</h3>
                      <p className="text-[#F5F5F5]/50 text-sm mt-1">{service.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-[#F5F5F5]/40">
                        <span className="text-[#E5B84C] font-semibold">{service.price}</span>
                        <span>{service.duration}</span>
                        <span className="bg-[#E5B84C]/10 text-[#E5B84C] px-2 py-0.5 rounded">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditService(service)}
                        className="text-[#F5F5F5]/70 hover:text-[#E5B84C] hover:bg-[#E5B84C]/10"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteService(service.id)}
                        className="text-[#F5F5F5]/70 hover:text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#F5F5F5]">Gallery Images</h2>
                <p className="text-[#F5F5F5]/50 text-sm">
                  Gallery management coming soon. Images are currently managed through the file system.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {GALLERY_IMAGES.map(image => (
                  <div
                    key={image.id}
                    className="bg-[#1A1A1A] border border-[#E5B84C]/20 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="p-3">
                      <p className="text-[#F5F5F5] text-sm truncate">{image.title}</p>
                      <p className="text-[#F5F5F5]/40 text-xs">{image.src}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#F5F5F5]">Settings</h2>

              <div className="grid gap-6 max-w-2xl">
                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader>
                    <CardTitle className="text-[#F5F5F5]">Data Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg">
                      <div>
                        <p className="text-[#F5F5F5] font-medium">Export All Data</p>
                        <p className="text-[#F5F5F5]/50 text-sm">Download a backup of all your content</p>
                      </div>
                      <Button
                        onClick={exportData}
                        variant="outline"
                        className="border-[#E5B84C]/30 text-[#F5F5F5] hover:bg-[#E5B84C]/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg">
                      <div>
                        <p className="text-[#F5F5F5] font-medium">Import Data</p>
                        <p className="text-[#F5F5F5]/50 text-sm">Restore from a backup file</p>
                      </div>
                      <Label className="cursor-pointer">
                        <Input
                          type="file"
                          accept=".json"
                          onChange={importData}
                          className="hidden"
                        />
                        <div className="flex items-center gap-2 px-4 py-2 border border-[#E5B84C]/30 rounded-md text-[#F5F5F5] hover:bg-[#E5B84C]/10">
                          <Upload className="w-4 h-4" />
                          Import
                        </div>
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A1A1A] border-[#E5B84C]/20">
                  <CardHeader>
                    <CardTitle className="text-[#F5F5F5]">Dashboard Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#F5F5F5]/50">Default Password</span>
                      <span className="text-[#F5F5F5] font-mono">athena2026</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#F5F5F5]/50">Data Storage</span>
                      <span className="text-[#F5F5F5]">Browser LocalStorage</span>
                    </div>
                    <p className="text-[#F5F5F5]/40 text-sm mt-4">
                      Note: Data is stored locally in your browser. Clearing browser data will reset all content.
                      Use the export feature regularly to back up your data.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Blog Post Dialog */}
      <Dialog open={isPostDialogOpen} onOpenChange={setIsPostDialogOpen}>
        <DialogContent className="bg-[#1A1A1A] border-[#E5B84C]/20 text-[#F5F5F5] max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#E5B84C]">
              {editingPost?.id && blogPosts.find(p => p.id === editingPost.id) ? 'Edit Post' : 'New Post'}
            </DialogTitle>
            <DialogDescription className="text-[#F5F5F5]/50">
              Create or edit your blog post content
            </DialogDescription>
          </DialogHeader>
          
          {editingPost && (
            <div className="space-y-4 mt-4">
              <div>
                <Label className="text-[#F5F5F5]">Title</Label>
                <Input
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  placeholder="Post title"
                  className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                />
              </div>

              <div>
                <Label className="text-[#F5F5F5]">Excerpt</Label>
                <Textarea
                  value={editingPost.excerpt}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  placeholder="Brief summary of the post"
                  className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  rows={2}
                />
              </div>

              <div>
                <Label className="text-[#F5F5F5]">Content</Label>
                <Textarea
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  placeholder="Full post content"
                  className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  rows={10}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#F5F5F5]">Date</Label>
                  <Input
                    value={editingPost.date}
                    onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                    placeholder="March 1, 2026"
                    className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  />
                </div>

                <div>
                  <Label className="text-[#F5F5F5]">Read Time</Label>
                  <Input
                    value={editingPost.readTime}
                    onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                    placeholder="5 min read"
                    className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#F5F5F5]">Category</Label>
                  <Select
                    value={editingPost.category}
                    onValueChange={(value) => setEditingPost({ ...editingPost, category: value })}
                  >
                    <SelectTrigger className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#E5B84C]/30">
                      <SelectItem value="Trends">Trends</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Tips">Tips</SelectItem>
                      <SelectItem value="Studio">Studio</SelectItem>
                      <SelectItem value="Services">Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-[#F5F5F5]">Image Path</Label>
                  <Input
                    value={editingPost.image}
                    onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                    placeholder="/work1.jpg"
                    className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={editingPost.featured}
                  onChange={(e) => setEditingPost({ ...editingPost, featured: e.target.checked })}
                  className="w-4 h-4 accent-[#E5B84C]"
                />
                <Label htmlFor="featured" className="text-[#F5F5F5] cursor-pointer">
                  Feature this post on the blog page
                </Label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsPostDialogOpen(false)}
                  className="border-[#E5B84C]/30 text-[#F5F5F5] hover:bg-[#E5B84C]/10"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  onClick={handleSavePost}
                  className="bg-[#E5B84C] text-[#0A0A0A] hover:bg-[#E5B84C]/90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Post
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Service Dialog */}
      <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
        <DialogContent className="bg-[#1A1A1A] border-[#E5B84C]/20 text-[#F5F5F5]">
          <DialogHeader>
            <DialogTitle className="text-[#E5B84C]">
              {editingService?.id && services.find(s => s.id === editingService.id) ? 'Edit Service' : 'New Service'}
            </DialogTitle>
            <DialogDescription className="text-[#F5F5F5]/50">
              Manage your service offerings
            </DialogDescription>
          </DialogHeader>
          
          {editingService && (
            <div className="space-y-4 mt-4">
              <div>
                <Label className="text-[#F5F5F5]">Service Name</Label>
                <Input
                  value={editingService.name}
                  onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                  placeholder="e.g., Classic Manicure"
                  className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                />
              </div>

              <div>
                <Label className="text-[#F5F5F5]">Description</Label>
                <Textarea
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  placeholder="Describe the service"
                  className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#F5F5F5]">Price</Label>
                  <Input
                    value={editingService.price}
                    onChange={(e) => setEditingService({ ...editingService, price: e.target.value })}
                    placeholder="$50"
                    className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  />
                </div>

                <div>
                  <Label className="text-[#F5F5F5]">Duration</Label>
                  <Input
                    value={editingService.duration}
                    onChange={(e) => setEditingService({ ...editingService, duration: e.target.value })}
                    placeholder="60 min"
                    className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]"
                  />
                </div>
              </div>

              <div>
                <Label className="text-[#F5F5F5]">Category</Label>
                <Select
                  value={editingService.category}
                  onValueChange={(value) => setEditingService({ ...editingService, category: value })}
                >
                  <SelectTrigger className="mt-1 bg-[#0A0A0A] border-[#E5B84C]/30 text-[#F5F5F5]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-[#E5B84C]/30">
                    <SelectItem value="Manicures">Manicures</SelectItem>
                    <SelectItem value="Enhancements">Enhancements</SelectItem>
                    <SelectItem value="Add-ons">Add-ons</SelectItem>
                    <SelectItem value="Specialty">Specialty</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsServiceDialogOpen(false)}
                  className="border-[#E5B84C]/30 text-[#F5F5F5] hover:bg-[#E5B84C]/10"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveService}
                  className="bg-[#E5B84C] text-[#0A0A0A] hover:bg-[#E5B84C]/90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Service
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
