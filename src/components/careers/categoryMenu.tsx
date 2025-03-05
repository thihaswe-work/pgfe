"use client";

import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { StaticImageData } from "next/image";
import { useEffect } from "react";

interface Prop {
  categories: { id: number; label: string; img?: string | StaticImageData }[];
  setCategory: (
    value: { id: number; label: string; img?: string | StaticImageData }[]
  ) => void;
  category?: { id: number; label: string; img?: string | StaticImageData }[];
}

export function CategoryMenu({ setCategory, categories, category }: Prop) {
  const form = useForm({
    defaultValues: {
      items: [] as { id: number; label: string }[], // Store full objects
    },
  });

  const onSubmit = (data: {
    items: {
      id: number;
      label: string;
      img?: string | StaticImageData;
    }[];
  }) => {
    setCategory(data.items); // Now sending [{ id, label }, { id, label }]
  };

  useEffect(() => {
    if (category && category.length === 0) {
      form.reset({ items: [] }); // Reset to empty array
    }
  }, [category, form]);

  return (
    <Form {...form}>
      <form
        onChange={form.handleSubmit(
          (e: {
            items: {
              id: number;
              label: string;
              img?: string | StaticImageData;
            }[];
          }) => {
            onSubmit(e);
          }
        )}
        className="space-y-8 p-4 md:p-2 lg:p-4"
      >
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4 ">
                <FormLabel className="text-lg md:text-md lg:text-lg font-semibold text-thirdBgColor ">
                  Career Categories
                </FormLabel>
              </div>
              {categories.map((item) => {
                const isChecked = field.value.some((i) => i.id === item.id);

                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-center space-x-3 "
                  >
                    <FormControl>
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          field.onChange(
                            checked
                              ? [...field.value, item] // Add full item { id, label }
                              : field.value.filter((i) => i.id !== item.id) // Remove by id
                          );
                        }}
                        className={`shadow-none border border-thirdBgColor ${
                          isChecked
                            ? "data-[state=checked]:text-background"
                            : " "
                        }`}
                      />
                    </FormControl>
                    <FormLabel
                      className={`-translate-y-1 w-full flex justify-between
                         font-normal text-sm lg:text-base ${
                           isChecked ? "" : ""
                         }`}
                    >
                      <span> {item.label}</span>
                      <span>(5) </span>
                    </FormLabel>
                  </FormItem>
                );
              })}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
