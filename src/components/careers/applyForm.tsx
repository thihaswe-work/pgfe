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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox Component

// Define Form Schema
const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
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

  // Checkbox must be checked to submit the form
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const ApplyForm = () => {
  // Initialize Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      coverletter: "",
      terms: false, // Checkbox starts as unchecked
    },
  });
  // Handle Form Submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Fullname<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your full name"
                  {...field}
                  className="border-thirdBgColor"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">
                Email<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  {...field}
                  className="border-thirdBgColor"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Resume Upload */}
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-semibold">
                Resume <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative flex items-center w-full h-full">
                  {/* Hidden File Input */}
                  <Input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="fileInput"
                    onChange={(e) => {
                      const files = e.target.files;
                      field.onChange(files); // Update form state
                    }}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                  />

                  {/* Display File Name or Default Message */}
                  <FormLabel
                    htmlFor="fileInput"
                    className="flex-1 px-4 py-3 cursor-pointer border-thirdBgColor border rounded-l-md border-r-0 overflow-hidden whitespace-nowrap text-ellipsis"
                  >
                    {field.value?.length > 0
                      ? field.value[0].name
                      : "Choose file"}
                  </FormLabel>

                  {/* Custom Browse Button (Triggers File Input) */}
                  <Button
                    className="bg-textColor px-4 h-auto  border border-thirdBgColor rounded-l-none font-semibold
        rounded-r-md "
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default form behavior
                      document.getElementById("fileInput")?.click();
                    }}
                  >
                    Browse
                  </Button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cover Letter */}
        <FormField
          control={form.control}
          name="coverletter"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Cover Letter</FormLabel>
              <FormControl>
                <Textarea
                  className="h-[200px] border-thirdBgColor resize-none"
                  placeholder="You can send whatever you want"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms and Conditions Checkbox */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  className="border-navbarBgColor translate-y-1"
                  checked={field.value}
                  onCheckedChange={(checked) =>
                    field.onChange(checked === true)
                  }
                />
              </FormControl>
              <FormLabel className="text-sm text-white">
                {"I agree to the "}
                <a href="/terms" className="text-textColor hover:underline">
                  {" terms and conditions "}
                </a>
                {" & "}
                <a href="/privacy" className="text-textColor hover:underline">
                  {"  privacy policy "}
                </a>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            className="w-full md:w-[70%] lg:w-[50%] bg-textColor text-navbarBgColor hover:bg-textColor hover:text-navbarBgColor font-semibold"
          >
            Submit your application
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ApplyForm;
