"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import UserAvatar from "@/components/UserAvatar";
import BotAvatar from "@/components/BotAvatar";
import { cn } from "@/lib/utils";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Select, SelectContent } from "@radix-ui/react-select";
import {
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const page = () => {
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bodyWeight: "",
      height: "",
      gender: "",
      age: "",
      bodyFat: "",
      activityLevel: "",
      bodyFrame: "",
      apetite: "",
      skinType: "",
      hairType: "",
      lipsAndTeeth: "",
      eyes: "",
      mind: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const OnSubmit = async (values) => {
    try {
      const {
        bodyWeight,
        height,
        gender,
        age,
        bodyFat,
        activityLevel,
        bodyFrame,
        apetite,
        skinType,
        hairType,
        lipsAndTeeth,
        eyes,
        mind,
      } = values;

      const userMessage = {
        role: "user",
        content: bodyWeight,
        height,
        gender,
        age,
        bodyFat,
        activityLevel,
        bodyFrame,
        apetite,
        skinType,
        hairType,
        lipsAndTeeth,
        eyes,
        mind,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/gpt", {
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-screen-lg">
          <div className="mb-4 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(OnSubmit)}
                className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm gap-2"
              >
                <FormField
                  className="mb-3"
                  name="bodyWeight"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="bodyweight"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Bodyweight (kg)
                      </label>
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          disabled={isLoading}
                          placeholder="Body Weight"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="height"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="height"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Height (cm)
                      </label>
                      <FormControl className="m-0 p-0">
                        <Input
                          type="number"
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          disabled={isLoading}
                          placeholder="Height"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="gender"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Gender
                      </label>
                      <FormControl className="m-0 p-0">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[100%] m-0">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent className="p-4 bg-black/60 text-white">
                            <SelectGroup className="">
                              <SelectLabel>Gender</SelectLabel>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="activityLevel"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="activityLevel"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Activity Level
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Select Activity Level" />
                          </SelectTrigger>
                          <SelectContent className="w-[100%] p-4 bg-black/60 text-white">
                            <SelectGroup>
                              <SelectLabel>Activity Level</SelectLabel>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="bodyFrame"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="bodyFrame"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Body Frame
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Select Body Frame" />
                          </SelectTrigger>
                          <SelectContent className="w-[100%] p-4 bg-black/60 text-white">
                            <SelectGroup>
                              <SelectLabel>Body Type</SelectLabel>
                              <SelectItem value="thin">Thin</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="wide">Wide</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="apetite"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="apetite"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Apetite
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Select Appetite Level" />
                          </SelectTrigger>
                          <SelectContent className="w-[100%] p-4 bg-black/60 text-white">
                            <SelectGroup>
                              <SelectLabel>Apetite Level</SelectLabel>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="skinType"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="skinType"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Skin Type
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Select Skin Type" />
                          </SelectTrigger>
                          <SelectContent className="w-[100%] p-4 bg-black/60 text-white">
                            <SelectGroup>
                              <SelectLabel>Skin Type</SelectLabel>
                              <SelectItem value="low">Rough and Dry</SelectItem>
                              <SelectItem value="medium">
                                Oily and soft
                              </SelectItem>
                              <SelectItem value="high">
                                Excessive Oily and Smooth
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="hairType"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="hairType"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Hair Type
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[100%]">
                            <SelectValue placeholder="Select Your Hair Type" />
                          </SelectTrigger>
                          <SelectContent className="w-[100%] p-4 bg-black/60 text-white">
                            <SelectGroup>
                              <SelectLabel>Select Your Hair Type</SelectLabel>
                              <SelectItem value="low">Rough and Dry</SelectItem>
                              <SelectItem value="medium">
                                Normal and Straight
                              </SelectItem>
                              <SelectItem value="high">
                                Thick and Curly
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="lipsAndTeeth"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="lipsAndTeeth"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Lips and Teeth
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Your Hair Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Lips and Teeths</SelectLabel>
                              <SelectItem value="low">
                                Thin Lips and uneven Teeth
                              </SelectItem>
                              <SelectItem value="medium">
                                Medium lips and mediums Teeth
                              </SelectItem>
                              <SelectItem value="high">
                                Large/Smooth lips and well formed Teeth
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="eyes"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="lipsAndTeeth"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Eyes
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Your Eyes type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select Your Eyes type</SelectLabel>
                              <SelectItem value="low">Small and Dry</SelectItem>
                              <SelectItem value="medium">
                                Medium eyes
                              </SelectItem>
                              <SelectItem value="high">
                                Big and Attractive
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="mind"
                  render={({ field }) => (
                    <FormItem className="p-4 border-2 border-gray-400 shadow-lg">
                      <label
                        htmlFor="lipsAndTeeth"
                        className="inline text-sm font-medium text-gray-600"
                      >
                        Mind
                      </label>
                      <FormControl className="m-0 p-0 mt-1">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="border-2 border-gray-400/40 p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Mind" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Mind</SelectLabel>
                              <SelectItem value="low">Restless</SelectItem>
                              <SelectItem value="medium">Aggressive</SelectItem>
                              <SelectItem value="high">
                                Calm and Cool
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
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
                {/* {message.role === "user" ? <UserAvatar /> : <BotAvatar />} */}
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
