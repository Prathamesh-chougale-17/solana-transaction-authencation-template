"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const transferSchema = z.object({
  recipientAddress: z
    .string()
    .min(32, "Invalid Solana address")
    .max(44, "Invalid Solana address"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)), "Must be a number")
    .refine((val) => Number(val) > 0, "Amount must be greater than 0"),
});

type TransferFormValues = z.infer<typeof transferSchema>;

export default function Transfer() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const form = useForm<TransferFormValues>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      recipientAddress: "",
      amount: "",
    },
  });

  const onSubmit = (data: TransferFormValues) => {
    console.log(data);
    setShowConfirmation(true);
  };

  const handleTransfer = () => {
    // Handle transfer logic here with form.getValues()
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="p-6 bg-gray-800/50 backdrop-blur-lg border-gray-700">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold tracking-tighter text-white"
              >
                Transfer SOL
              </motion.h1>
              <p className="text-gray-400">Send SOL to any wallet address</p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="recipientAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-400">
                        Recipient Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter recipient's public key"
                          className="bg-gray-700/50 border-gray-600 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-gray-400">
                        Amount (SOL)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="any"
                          placeholder="0.0"
                          className="bg-gray-700/50 border-gray-600 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  Transfer
                </Button>
              </form>
            </Form>

            <div className="text-center text-sm text-gray-400">
              <p>Transaction fee: 0.000005 SOL</p>
            </div>
          </div>
        </Card>
      </motion.div>

      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="bg-gray-800 text-white border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Transfer</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Are you sure you want to send {form.getValues("amount")} SOL to{" "}
              {form.getValues("recipientAddress")}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              onClick={handleTransfer}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
