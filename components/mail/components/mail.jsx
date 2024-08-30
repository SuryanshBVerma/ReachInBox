'use client'

import React, { useEffect, useState } from "react";
import {
  Search,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

import { Separator } from "@/components/ui/separator";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { TooltipProvider } from "@/components/ui/tooltip";

import { MailDisplay } from "./mail-display";
import { MailList } from "./mail-list";
import { useMail } from "../use-mail";
import RefreshIcon from "@/components/svg/RefreshIcon";



export function Mail({
  mails,
  defaultLayout = [25, 65],
}) {
  const [mail] = useMail();
  const [data, setData] = useState([])

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");
  
    // Function to make the GET request
    const fetchData = async () => {
      try {
        const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const res = await response.json();
        console.log('Data:', res.data); 
        setData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
    {data ? <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold text-[#4285F4]">All Inbox(s)</h1>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              {data.length> 0 && <MailList items={data} />}
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <MailList items={mails?.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <MailDisplay
            mail={data?.find((item) => item.id === mail.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>: (<div>error</div>)}</>
  );
}