import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function DownloadReport() {
  return (
    <Button variant="outline" className="flex items-center gap-2">
      <Download className="h-4 w-4" />
      Download PDF
    </Button>
  );
}