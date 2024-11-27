import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";

interface BreadcrumbformatProps {
  currentPath: string;
}

export function BreadcrumbFormat({ currentPath }: BreadcrumbformatProps) {

  const pathSegments = currentPath.split('/').filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Trang Chủ</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments?.map((segment: any, index: any) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbSeparator />
            {segment}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
