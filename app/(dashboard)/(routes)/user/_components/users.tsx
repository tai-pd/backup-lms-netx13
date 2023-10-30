interface UsersProps {
    items: [];
}

const Users = ({ items, }: UsersProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
            
        ))}
        </div>
    )
}
