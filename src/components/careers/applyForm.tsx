"use client";

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
// import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  resume: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length > 0,
      {
        message: "Resume file is required.",
      }
    )
    .refine((files) => files?.[0]?.size < 5 * 1024 * 1024, {
      message: "File size must be less than 5MB.",
    }),
  coverletter: z.string().optional(),
});

const ApplyForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      coverletter: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="
                Enter your Email Address"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume</FormLabel>
              <FormControl>
                <div className="flex flex-col gap-2">
                  <label className="text-white font-semibold">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="flex w-full border border-gray-700 bg-black text-white rounded-lg overflow-hidden">
                    <input
                      {...field}
                      type="file"
                      className="hidden"
                      id="fileInput"
                    />
                    <label
                      htmlFor="fileInput"
                      className="flex-1 px-4 py-2 bg-black text-gray-400 cursor-pointer"
                    >
                      Choose file
                    </label>
                    <Button className="bg-red-600 px-4 py-2 rounded-none">
                      Browse
                    </Button>
                  </div>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coverletter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Letter</FormLabel>
              <FormControl>
                <Textarea
                  className="h-[200px]"
                  placeholder="You can send whatever you want"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            className="w-full md:w-[70%] lg:w-[50%] bg-textColor text-navbarBgColor"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ApplyForm;
