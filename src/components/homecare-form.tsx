"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import type { HomecareRequest } from "@/app/homecare/page";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  address: z.string().min(10, "Please enter a complete address in Bali."),
  medicalCondition: z.string().min(5, "Please describe the medical condition."),
});

type HomecareFormValues = z.infer<typeof formSchema>;

interface HomecareFormProps {
  onSubmit: (data: HomecareRequest) => void;
  isLoading: boolean;
}

export function HomecareForm({ onSubmit, isLoading }: HomecareFormProps) {
  const form = useForm<HomecareFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      medicalCondition: "",
    },
  });

  function handleFormSubmit(data: HomecareFormValues) {
    onSubmit(data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp / Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+62 812 3456 7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Address in Bali</FormLabel>
              <FormControl>
                <Input placeholder="Villa Name, Street, Area (e.g., Canggu)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="medicalCondition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Briefly Describe Medical Condition/Needs</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., High fever and headache for 2 days"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Request Homecare Visit"
          )}
        </Button>
      </form>
    </Form>
  );
}
