import { IMAGES } from "@/utils/images";
import Image from "next/image";

export function DecorBar() {
    return (
        <>
            <div className="inline-block my-8 align-bottom">
                <Image
                    width={43}
                    height={4}
                    src={IMAGES.DECOR_BAR}
                    alt="img"
                />
            </div>
        </>
    )
}