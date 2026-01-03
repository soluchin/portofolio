import type { Stack } from "../types/stack";

function StackDisplay(stack: Stack) {
    return(
        <div className="flex flex-col items-center m-2">
            <img src={stack.icon} alt={stack.name} width={50} height={50} />
            <p className="mt-2 text-sm">{stack.name}</p>
        </div>
    );
}

export default StackDisplay;