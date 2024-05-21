import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import lead_sources from "./data";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LeadScraperComponent() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-8">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Input
              placeholder="Search leads"
              className="focus:outline-none focus-visible:ring-0 w-1/4"
            />
            <Button onClick={() => navigate("/add-lead")} size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add New Lead Source
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Targets</TableHead>
                  <TableHead>Count</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lead_sources.map((lead_source, index) => {
                  return (
                    <TableRow key={index} className="hover:bg-inherit">
                      <TableCell className="font-medium">
                        {lead_source.name}
                      </TableCell>
                      <TableCell>
                        {lead_source.targets.map((target, index) => {
                          return (
                            <Badge
                              key={index}
                              className="rounded-sm px-2 text-xs font-normal mr-2"
                              variant="secondary"
                            >
                              {target}
                            </Badge>
                          );
                        })}
                      </TableCell>
                      <TableCell className="font-medium">
                        {lead_source.count}
                      </TableCell>
                      <TableCell className="capitalize">
                        {lead_source.status}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              className="rounded-full"
                              size="icon"
                              variant="ghost"
                            >
                              <DotsVerticalIcon className="h-4 w-4" />
                              <span className="sr-only">
                                Toggle actions menu
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Show leads</DropdownMenuItem>
                            <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                            <DropdownMenuItem>Start campaign</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
