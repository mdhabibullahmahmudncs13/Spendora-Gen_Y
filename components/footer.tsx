import Link from 'next/link';
import { CircleDollarSign, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Spendora</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your personal financial advisor, helping you track expenses and plan for the future.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/expenses" className="text-muted-foreground hover:text-foreground transition-colors">
                Expenses
              </Link>
            </li>
            <li>
              <Link href="/reports" className="text-muted-foreground hover:text-foreground transition-colors">
                Reports
              </Link>
            </li>
            <li>
              <Link href="/advisor" className="text-muted-foreground hover:text-foreground transition-colors">
                Advisor
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com" 
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Spendora. All rights reserved.
          </p>
          <Link 
            href="https://bolt.new" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Built with Bolt
          </Link>
        </div>
      </div>
    </footer>
  );
}