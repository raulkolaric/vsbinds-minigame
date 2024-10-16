import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Page() {
    return (
        <div className="min-h-screen min-w-full items-center bg-gray-900">
            <p className="text-white text-2xl mb-4 flex justify-center">vscode-minigame</p>
            <div className="flex justify-center">
                <div className="w-[1280px] h-[720px] bg-gray-700 flex justify-center items-center rounded-2xl shadow-2xl shadow-blue-500/10 absolute">
                    <p className="text-white"></p>
                </div>
                <div id="menu" className="ml-8 p-4 flex flex-col text-white h-fit ml-auto pr-24 pb-8 text-center">
                <div className="flex justify-center items-center p-2 bg-blue-500/10 rounded-lg ">
                    <Avatar>
                        <AvatarImage className="w-[40px] h-[40px] rounded-full" src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="pl-2 w-fit h-fit text-xl font-medium">Raul Kolaric</p>
                </div>
                    <p className="">Theme</p>
                    <p className="">Practice</p>
                    <p>Later</p>
                </div>
            </div>
        </div>
    );
}
