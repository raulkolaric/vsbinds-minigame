import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Page() {
    return (
        <div className="min-h-screen min-w-full items-center bg-gray-900">
            <p className="text-white text-4xl mb-4 flex justify-center font-pixel">vscode-minigame</p>
            <div className="flex justify-center">
                <div className="w-[1280px] h-[720px] bg-gray-700 flex justify-center items-center rounded-2xl shadow-2xl shadow-blue-500/10 absolute mt-16">
                    <p className="text-white font-nunito"></p>
                </div>
                <div id="menu" className=" items-center mt-12 p-20 flex flex-col text-white h-fit ml-auto text-center">
                <div className="flex justify-center items-center p-4 bg-blue-500/10 rounded-xl mb-12" font-pixel>
                    <Avatar>
                        <AvatarImage className="w-[40px] h-[40px] rounded-full" src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="pl-2 w-fit h-fit text-xl font-thin font-pixel">Hello, Raul</p>
                </div>
                    <div className="border-b-[1px] border-blue-500/20 w-full">
                        <p className="mt-4 font-pixel color-red m-1 text-2xl pb-2">Settings</p>
                    </div>
                    <div className="border-b-[1px] border-blue-500/20 w-full">
                        <p className="mt-4 font-pixel color-red m-1 text-2xl pb-2">Theme</p>
                    </div>
                    <div className="border-b-[1px] border-blue-500/20 w-full">
                        <p className="mt-4 font-pixel color-red m-1 text-2xl pb-2">Practice</p>
                    </div>
                    <div className="border-b-[1px] border-blue-500/20 w-full">
                        <p className="mt-4 font-pixel color-red m-1 text-2xl pb-2">Top Scores</p>
                    </div>
                    <div className="border-b-[1px] border-blue-500/20 w-full">
                        <p className="mt-4 font-pixel color-red m-1 text-2xl pb-2">Bind List</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}
