"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { EditUserModal } from "@/components/admin/EditUserModal"
import { ActivityLogModal } from "@/components/admin/ActivityLogModal"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type User = {
  id: string
  name: string
  email: string
  role: "user" | "lawyer" | "admin"
  status: "active" | "inactive"
  casesCount: number
  rating: number
}

const mockUsers: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "user", status: "active", casesCount: 3, rating: 4.5 },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "lawyer",
    status: "active",
    casesCount: 10,
    rating: 4.8,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    status: "inactive",
    casesCount: 1,
    rating: 3.5,
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "admin",
    status: "active",
    casesCount: 0,
    rating: 0,
  },
]

type UserTableProps = {
  searchTerm: string
  filters: {
    status: string
    role: string
  }
}

export function UserTable({ searchTerm, filters }: UserTableProps) {
  const [users, setUsers] = useState(mockUsers)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [viewingActivityLog, setViewingActivityLog] = useState<string | null>(null)

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.status === "all" || user.status === filters.status) &&
      (filters.role === "all" || user.role === filters.role),
  )

  const handleStatusChange = (userId: string, newStatus: "active" | "inactive") => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: newStatus } : user)))
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Cases</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.casesCount}</TableCell>
              <TableCell>{user.rating.toFixed(1)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => setEditingUser(user)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setViewingActivityLog(user.id)}>
                    Log
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant={user.status === "active" ? "destructive" : "default"}>
                        {user.status === "active" ? "Disable" : "Enable"}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {user.status === "active" ? "Disable" : "Enable"} User Account
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to {user.status === "active" ? "disable" : "enable"} {user.name}'s
                          account?
                          {user.status === "active"
                            ? " This will prevent the user from accessing the platform."
                            : " This will restore the user's access to the platform."}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleStatusChange(user.id, user.status === "active" ? "inactive" : "active")}
                        >
                          Confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={(updatedUser) => {
            setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)))
            setEditingUser(null)
          }}
        />
      )}
      {viewingActivityLog && (
        <ActivityLogModal userId={viewingActivityLog} onClose={() => setViewingActivityLog(null)} />
      )}
    </>
  )
}

