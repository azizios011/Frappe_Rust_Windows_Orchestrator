import { cn } from '../lib/utils'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

// Brand badge: Frappe mark on a white tile.
export function BrandMark({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={cn('inline-flex size-14 shrink-0 items-center justify-center bg-white', className)} {...props}>
      <img alt="" className="size-full object-contain" src={assetPath('Frappe_Logo.png')} />
    </span>
  )
}
