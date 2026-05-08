import React from 'react';
import { CircleChevronDown, CircleChevronUp } from 'lucide-react';

export function GameDevelopment() {
    const [qubeSummaryOpen, setQubeSummaryOpen] = React.useState(true);

    return (
        <section>
            <h2>Game Development</h2>
            <div className="grid grid-cols-[20%_1fr]">
                <div className="p-5">
                    <img
                        src="images/red_frog_games_logo.png"
                        alt="Red Frog Games Logo"
                    />
                </div>
                <div>
                    <h3>Red Frog Games (Founder)</h3>
                    <p>
                        Red Frog Games is an independent game development studio
                        currently focused on building multiplayer games in
                        Roblox. The studio is in early development and is
                        actively working on its first project, Qube, which
                        serves as the foundation for its direction and future
                        work.
                    </p>
                    <h3 className="flex items-center gap-2">
                        <button
                            onClick={() => {
                                setQubeSummaryOpen(!qubeSummaryOpen);
                            }}
                            className="cursor-pointer"
                        >
                            {qubeSummaryOpen ? (
                                <CircleChevronUp className="size-5 text-current" />
                            ) : (
                                <CircleChevronDown className="size-5 text-current" />
                            )}
                        </button>

                        Qube
                    </h3>
                    <p className={`${qubeSummaryOpen ? 'block' : 'hidden'} pl-7`}>
                        Qube is a multiplayer Roblox game currently in development, built around a cube-based world where players
                        interact, explore, and progress through gameplay systems built on top of Roblox’s engine. Development
                        focuses on designing and implementing gameplay logic, systems architecture, and modular components that
                        define player experience and in-game behavior.
                    </p>
                </div>
            </div>
        </section>
    );
}
