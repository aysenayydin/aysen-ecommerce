import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { postSignup } from "@/lib/apiService";

const formSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain uppercase, lowercase, a number, and a special character"
      ),
    passwordvalidation: z.string(),
    role_id: z.string(),
    store: z
      .object({
        name: z.string().min(3, "Store name must be at least 3 characters"),
        phone: z
          .string()
          .regex(
            /^(\+90|0)?[0-9]{10}$/,
            "Please enter a valid Turkish phone number"
          ),
        tax_no: z
          .string()
          .regex(/^T\d{4}V\d{6}$/, "Tax ID format should be TXXXXVXXXXXX"),
        bank_account: z
          .string()
          .regex(/^TR\d{24}$/, "Please enter a valid IBAN format"),
      })
      .optional(),
  })
  .refine((data) => data.password === data.passwordvalidation, {
    message: "Passwords do not match",
    path: ["passwordvalidation"],
  });

function SignUp({ roles }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    shouldUnregister: true,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordvalidation: "",
      role_id: "customer",
      store: {
        name: "",
        phone: "",
        tax_no: "",
        bank_account: "",
      },
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const selectedRole = watch("role_id");

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const formData = {
        name: values.name,
        email: values.email,
        password: values.password,
        role_id: values.role_id,
        ...(values.role_id === "store" && {
          store: {
            name: values.store.name,
            phone: values.store.phone,
            tax_no: values.store.tax_no,
            bank_account: values.store.bank_account,
          },
        }),
      };
      await postSignup(formData)
        .then((response) => {
          console.log("data", response.data);
        })
        .catch((error) => console.error(error));
      navigate(-1);
      alert("Please check your email to activate your account!");
    } catch (error) {
      alert(error.response?.data?.message || "Sign up failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input label="Name" placeholder="Enter your name" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="passwordvalidation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Role Selection */}
        <div>
          <Select
            onValueChange={(value) => form.setValue("role_id", value)}
            value={selectedRole}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role.id} value={role.code}>
                  {role.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Store-specific fields */}
        {selectedRole === "store" && (
          <div className="space-y-4">
            <Input
              label="Store Name"
              placeholder="Enter store name"
              {...register("store.name")}
            />
            {errors.store?.name && (
              <p className="text-red-500 text-sm">
                {errors.store.name.message}
              </p>
            )}

            <Input
              label="Store Phone"
              placeholder="+90XXXXXXXXXX"
              {...register("store.phone")}
            />
            {errors.store?.phone && (
              <p className="text-red-500 text-sm">
                {errors.store.phone.message}
              </p>
            )}

            <Input
              label="Store Tax ID"
              placeholder="TXXXXVXXXXXX"
              {...register("store.tax_no")}
            />
            {errors.store?.tax_no && (
              <p className="text-red-500 text-sm">
                {errors.store.tax_no.message}
              </p>
            )}

            <Input
              label="Store Bank Account"
              placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
              {...register("store.bank_account")}
            />
            {errors.store?.bank_account && (
              <p className="text-red-500 text-sm">
                {errors.store.bank_account.message}
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing up...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default SignUp;
