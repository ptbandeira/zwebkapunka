'use client'

import { ShoppingCart, Trash2 } from 'lucide-react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'

export default function MiniCart() {
  const { items, removeItem, subtotal } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open cart">
          <ShoppingCart className="h-6 w-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold-rich text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground">Your cart is empty</p>
          )}

          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm">
                  $
                  {(
                    parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity
                  ).toFixed(2)}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <SheetFooter>
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Button className="w-full bg-gold-rich text-white">Checkout</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
