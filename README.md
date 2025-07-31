# Gradient Club - E-commerce Platform

A modern, full-featured e-commerce platform built with Next.js, TypeScript, and Supabase. Features include user authentication, product management, shopping cart, and admin panel.

## 🚀 Features

### Customer Features
- **Product Browsing**: Browse products with search and filtering
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Sign up and login functionality
- **Responsive Design**: Mobile-first responsive design
- **Currency**: INR (Indian Rupees) support

### Admin Features
- **Product Management**: Add, edit, and delete products
- **Dashboard**: Analytics and overview statistics
- **Inventory Management**: Track stock levels
- **Order Management**: View and manage orders

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Supabase**: Database and authentication
- **Stripe**: Payment processing (ready for integration)
- **Tailwind CSS**: Modern styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Zustand**: State management for cart
- **Responsive Design**: Mobile-first approach

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (Database & Auth)
- **Payments**: Stripe
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

   # Stripe Configuration
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
   STRIPE_SECRET_KEY=your_stripe_secret_key_here
   ```

4. **Set up Supabase**
   - Create a new Supabase project
   - Get your project URL and anon key
   - Create the following tables in your Supabase database:

   ```sql
   -- Products table
   CREATE TABLE products (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name VARCHAR NOT NULL,
     description TEXT,
     price DECIMAL(10,2) NOT NULL,
     images TEXT[],
     category VARCHAR NOT NULL,
     stock INTEGER DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Users table (extends Supabase auth)
   CREATE TABLE user_profiles (
     id UUID REFERENCES auth.users(id) PRIMARY KEY,
     full_name VARCHAR,
     avatar_url VARCHAR,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Orders table
   CREATE TABLE orders (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id),
     products JSONB NOT NULL,
     total DECIMAL(10,2) NOT NULL,
     status VARCHAR DEFAULT 'pending',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ecommerce-platform/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin dashboard
│   │   ├── auth/              # Authentication pages
│   │   ├── cart/              # Shopping cart
│   │   ├── products/          # Product listing
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── auth/             # Authentication components
│   │   ├── cart/             # Cart components
│   │   ├── layout/           # Layout components
│   │   ├── products/         # Product components
│   │   └── ui/               # UI components
│   └── lib/                  # Utilities and configurations
│       ├── supabase.ts       # Supabase client
│       ├── stripe.ts         # Stripe configuration
│       ├── store.ts          # Zustand store
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
└── package.json
```

## 🎨 Design System

The platform uses a custom design system with:
- **Colors**: Purple and pink gradient theme
- **Typography**: Inter font family
- **Components**: Reusable UI components
- **Animations**: Smooth transitions with Framer Motion

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Enable Row Level Security (RLS)
3. Set up authentication providers
4. Create the database tables
5. Configure environment variables

### Stripe Setup
1. Create a Stripe account
2. Get your API keys
3. Configure webhook endpoints
4. Set up environment variables

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Similar to Vercel setup
- **Railway**: Good for full-stack deployment
- **DigitalOcean**: Manual deployment option

## 📱 Features Overview

### Customer Journey
1. **Browse Products**: Search and filter products
2. **Add to Cart**: Add items with quantity
3. **Authentication**: Sign up/login
4. **Checkout**: Complete purchase
5. **Order Tracking**: View order status

### Admin Journey
1. **Dashboard**: View analytics
2. **Product Management**: CRUD operations
3. **Order Management**: Process orders
4. **User Management**: View customer data

## 🔒 Security

- **Authentication**: Supabase Auth with JWT
- **Database**: Row Level Security (RLS)
- **Payments**: Stripe secure payment processing
- **Environment Variables**: Secure configuration

## 📈 Performance

- **Next.js**: Server-side rendering and static generation
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Built-in caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

## 🔮 Roadmap

- [ ] Payment integration with Stripe
- [ ] Email notifications
- [ ] Advanced product filtering
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app (React Native)

---

Built with ❤️ using Next.js, TypeScript, and Supabase
