/**
 * @file button.tsx
 * @overview Sandbox of components.
 */

import { Button } from '@/components/button';
import { IconCircle } from '@tabler/icons-react';

/**
 * @returns {JSX.Element} Example of button usage
 * @example
  import {ButtonExample} from '@/examples/button.tsx';

  <ButtonExample />
 */
function ButtonExample(): JSX.Element {
  document.title = 'Button';
  return (
    <div className="bg-white p-4 m-8 flex flex-col gap-2">
      <div className="flex gap-2">
        {/* size lg button */}
        <Button size="lg" variant={'primary'}>
          <IconCircle className="size-5" />
          Button
          <IconCircle className="size-5" />
        </Button>
        <Button size="lg" variant={'secondary'}>
          <IconCircle className="size-5" />
          Button
          <IconCircle className="size-5" />
        </Button>
        <Button size="lg" variant={'destructive'}>
          <IconCircle className="size-5" />
          Button
          <IconCircle className="size-5" />
        </Button>
        <Button size="lg" variant={'outline'}>
          <IconCircle className="size-5" />
          Button
          <IconCircle className="size-5" />
        </Button>
        <Button size="lg" variant={'ghost'}>
          <IconCircle className="size-5" />
          Button
          <IconCircle className="size-5" />
        </Button>
      </div>
      <div className="flex gap-2">
        {/* size default button */}
        <Button variant={'primary'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button variant={'secondary'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button variant={'destructive'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button variant={'outline'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button variant={'ghost'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
      </div>
      <div className="flex gap-2">
        {/* size default button */}
        <Button size={'sm'} variant={'primary'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button size={'sm'} variant={'secondary'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button size={'sm'} variant={'destructive'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button size={'sm'} variant={'outline'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
        <Button size={'sm'} variant={'ghost'}>
          <IconCircle className="size-4" />
          Button
          <IconCircle className="size-4" />
        </Button>
      </div>
      <div className="flex gap-20">
        {/* size default button */}
        <Button size={'icon'} variant={'primary'}>
          <IconCircle className="size-4" />
        </Button>
        <Button size={'icon'} variant={'secondary'}>
          <IconCircle className="size-4" />
        </Button>
        <Button size={'icon'} variant={'destructive'}>
          <IconCircle className="size-4" />
        </Button>
        <Button size={'icon'} variant={'outline'}>
          <IconCircle className="size-4" />
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <IconCircle className="size-4" />
        </Button>
      </div>
    </div>
  );
}
export { ButtonExample };