import qs from "query-string";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

interface UserItemProps {
    id: String;
    name: String;
    email: String;
    phone?: String;
    gender: boolean;
    icon?: IconType;
    birth_day?: Date;
    cours_completed?: number;
}

const UserItemPage = ({
    id,
    name,
    email,
    phone,
    gender,
    icon: Icon,
    birth_day,
    cours_completed
}: UserItemProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const onClick = () => {
        // Goto detail
    }
    return (
        <>
        <button
            onClick={onClick}
            className={cn(
                "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition"
            )}
            type="button"
        >
            {Icon && <Icon size={20} />}
            <div className="truncate">
                {}
            </div>
    </button>
        </>
    )
}
