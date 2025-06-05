import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';

export function VideoAdvisor() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Video Advisor</CardTitle>
        <CardDescription>Get personalized video advice</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative h-40 rounded-md overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg"
              alt="Financial advisor"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button size="sm" variant="secondary" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Play Video
              </Button>
            </div>
          </div>
          <p className="text-sm">
            "Sarah has prepared a video analysis of your recent spending habits and investment opportunities."
          </p>
        </div>
      </CardContent>
    </Card>
  );
}