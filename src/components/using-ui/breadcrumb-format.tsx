import router, { useRouter } from "next/router";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
interface BreadcrumbformatProps {
  currentPath: string;  // Define the prop type
}
export function Breadcrumbformat({ currentPath }: BreadcrumbformatProps) {
    const pathSegments = currentPath.split('/').filter(Boolean);
    return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang Chủ</BreadcrumbLink>
            </BreadcrumbItem>
            {pathSegments.map((segment, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbSeparator />
            {segment === "course" ? 'Khóa học' : ''}
          </BreadcrumbItem>
        ))}
          </BreadcrumbList>
        </Breadcrumb>
    )
}
