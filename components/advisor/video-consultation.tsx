import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Play, Video } from 'lucide-react';

export function VideoConsultation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5 text-primary" />
          Video Advisor
        </CardTitle>
        <CardDescription>Interact with your personal financial advisor</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative h-[200px] md:h-[250px] rounded-md overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg"
              alt="Financial advisor"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button variant="secondary" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Start Consultation
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Sarah Williams</h3>
            <p className="text-sm text-muted-foreground">
              Your dedicated financial advisor is ready to answer your questions and provide personalized advice through an interactive video consultation.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-muted-foreground">Available now</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Powered by Tavus AI video technology
        </p>
      </CardFooter>
    </Card>
  );
}