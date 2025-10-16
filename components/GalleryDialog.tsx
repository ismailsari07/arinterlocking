"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface GalleryDialogProps {
  imageId: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryDialog({ imageId, isOpen, onClose }: GalleryDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh]" showCloseButton>
        <DialogHeader>
          <DialogDescription className="w-full h-full">
            <Image
              src={`/gallery${imageId}.jpeg`}
              alt={`Gallery Image ${imageId}`}
              width={1100}
              height={900}
              className="w-full h-auto rounded-xl object-contain"
              priority
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}