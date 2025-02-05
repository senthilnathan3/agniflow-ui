import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/agniflow.png" alt="@agniflow" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
