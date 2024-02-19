"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
const page = () => {
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const OnSubmit = async (values) => {
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/gptint", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error) {
      //TODO: Open Premium Modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <div className="mx-16 flex gap-x-6">
        <div className="w-[70%]">
          <div className="mt-10 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(OnSubmit)}
                className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
              >
                <FormField
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          disabled={isLoading}
                          placeholder="Ask me Questions...I'll try to explain"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  className="col-span-12 lg:col-span-2"
                  disabled={isLoading}
                >
                  Generate
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={String(message.content)}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{String(message.content)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
