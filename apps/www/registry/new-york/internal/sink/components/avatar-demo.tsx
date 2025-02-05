import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/agniflow.png" alt="@agniflow" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
