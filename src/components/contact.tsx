'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});
type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Datpindah@gmail.com',
    href: 'mailto:Datpindah@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+62895335793521',
    href: 'tel:+62895335793521',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Tuban, Jawa Timur',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', message: '' },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const message = `Hello, my name is ${data.name}. ${data.message}`;
    const whatsappUrl = `https://wa.me/62895335793521?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Your message is ready to be sent.',
    });
    form.reset();
  };

  return (
    <section id="contact" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl animate-fade-in opacity-0 [animation-delay:200ms]">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 animate-fade-in opacity-0 [animation-delay:300ms]">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in opacity-0 [animation-delay:400ms]">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-lg text-gray-600 hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-gray-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in opacity-0 [animation-delay:500ms]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="py-6" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." {...field} rows={6} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] py-7 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  disabled={form.formState.isSubmitting}
                >
                  Send via WhatsApp
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
