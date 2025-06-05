'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Mic } from 'lucide-react';

const formSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  date: z.date(),
  description: z.string().optional(),
});

export function ExpenseTracker() {
  const { toast } = useToast();
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      category: "",
      date: new Date(),
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would normally send data to a server
    toast({
      title: "Expense Added",
      description: `$${values.amount} added to ${values.category}`,
    });
    form.reset();
  }

  function handleVoiceInput() {
    setIsVoiceActive(true);
    
    // Mock voice recognition - in a real app, this would use the Web Speech API
    setTimeout(() => {
      setIsVoiceActive(false);
      form.setValue("amount", "45.75");
      form.setValue("category", "Transport");
      form.setValue("description", "Gas for the car");
      
      toast({
        title: "Voice Input Received",
        description: "We heard: $45.75 for gas in the Transport category",
      });
    }, 2000);
  }
  
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
        <CardDescription>Track your spending by adding expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Housing">Housing</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Transport">Transport</SelectItem>
                      <SelectItem value="Entertainment">Entertainment</SelectItem>
                      <SelectItem value="Utilities">Utilities</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className="w-full pl-3 text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Add notes about this expense" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-2 flex gap-2">
              <Button type="submit" className="flex-1">Add Expense</Button>
              <Button 
                type="button" 
                variant="outline" 
                className="flex items-center gap-2" 
                onClick={handleVoiceInput}
                disabled={isVoiceActive}
              >
                <Mic className={`h-4 w-4 ${isVoiceActive ? 'text-primary animate-pulse' : ''}`} />
                {isVoiceActive ? 'Listening...' : 'Voice Input'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}