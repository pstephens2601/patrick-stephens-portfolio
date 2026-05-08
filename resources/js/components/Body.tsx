import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { GameDevelopment } from "@/components/GameDevelopment";
export function Body() {
    return (
        <div className="container mx-auto">
            <main className="grid grid-cols-1 md:grid-cols-[20%_1fr] bg-white p-5">
                <div className="hidden md:block"></div>
                <div>
                    <ProfessionalExperience />
                    <GameDevelopment />
                </div>
            </main>
        </div>
    );
}
