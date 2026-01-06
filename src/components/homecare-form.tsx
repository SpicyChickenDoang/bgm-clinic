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
import type { HomecareRequest } from "@/app/[lang]/homecare/page";

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
  dictionary: any;
}

export function HomecareForm({ onSubmit, isLoading, dictionary }: HomecareFormProps) {
  const t = dictionary;
  const form = useForm<HomecareFormValues>({
    resolver: zodResolver(formSchema.extend({
      name: z.string().min(2, t.nameError),
      phone: z.string().min(8, t.phoneError),
      address: z.string().min(10, t.addressError),
      medicalCondition: z.string().min(5, t.conditionError),
    })),
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
              <FormLabel>{t.name}</FormLabel>
              <FormControl>
                <Input placeholder={t.namePlaceholder} {...field} />
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
              <FormLabel>{t.phone}</FormLabel>
              <FormControl>
                <Input placeholder={t.phonePlaceholder} {...field} />
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
              <FormLabel>{t.address}</FormLabel>
              <FormControl>
                <Input placeholder={t.addressPlaceholder} {...field} />
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
              <FormLabel>{t.condition}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.conditionPlaceholder}
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
              {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </Button>
      </form>
    </Form>
  );
}
