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

interface Prop {
  categories: { id: number; label: string; img?: string | StaticImageData }[];
  setCategory: (
    value: { id: number; label: string; img?: string | StaticImageData }[]
  ) => void;
}

export function CategoryMenu({ setCategory, categories }: Prop) {
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
        className="space-y-8 w-[270px] rounded-md border border-thirdBgColor p-4 "
      >
        <FormField
          control={form.control}
          name="items"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4 ">
                <FormLabel className="text-lg font-semibold text-thirdBgColor ">
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
                        className={`${
                          isChecked
                            ? "data-[state=checked]:text-textColor border-red-500"
                            : "border-white "
                        }`}
                      />
                    </FormControl>
                    <FormLabel
                      className={`-translate-y-1
                         font-normal text-base ${
                           isChecked ? "text-textColor" : ""
                         }`}
                    >
                      {item.label}
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
