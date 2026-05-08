import { CircleChevronUp } from 'lucide-react';
import { CircleChevronDown } from 'lucide-react';
import React from 'react';

export function ProfessionalExperience() {

    const [carsExperienceOpen, setCarsExperienceOpen] = React.useState(true);
    const [cnoaExperienceOpen, setCnoaExperienceOpen] = React.useState(true);

    return (
        <section>
            <h2 className="!mt-0">Professional Experience</h2>
            <h3 className="flex items-center gap-2">
                <button onClick={() => {
                    setCarsExperienceOpen(!carsExperienceOpen);
                }} className="cursor-pointer">
                    {carsExperienceOpen
                        ? <CircleChevronUp className="text-current size-5" />
                        : <CircleChevronDown className="text-current size-5" />
                    }
                </button>

                Cars Commerce/Cars.com
            </h3>
            <p className={`${carsExperienceOpen ? 'block' : 'hidden'} pl-7`}>
                Worked on the Website Inventory team, building and maintaining backend systems that delivered real-time
                vehicle inventory to over 8,000 car dealership websites across the United States. The work focused on
                modernizing how inventory data flows from manufacturers and data providers to dealer platforms, replacing
                legacy systems with faster and more reliable services. Monitoring and alerting were implemented to proactively
                detect and resolve issues before they impacted customers or dealers. The role also included managing data
                integrations with major automakers such as GM, Ford, Toyota, Honda, Hyundai, and Subaru. Production incidents
                were regularly diagnosed and resolved to maintain system stability, and a key
                performance bottleneck affecting high-traffic dealership websites was identified and eliminated.
            </p>
            <h3 className="flex items-center gap-2">
                <button onClick={() => {
                    setCnoaExperienceOpen(!cnoaExperienceOpen);
                }} className="cursor-pointer">
                    {cnoaExperienceOpen
                        ? <CircleChevronUp className="text-current size-5" />
                        : <CircleChevronDown className="text-current size-5" />
                    }
                </button>

                California Narcotic Officers’ Association
            </h3>
            <p className={`${cnoaExperienceOpen ? 'block' : 'hidden'} pl-7`}>
                Owned the long-term development and maintenance of a membership platform for the California Narcotic Officers’
                Association over 8 years, initially architecting the system using a custom MVC-style PHP framework and continuously
                evolving it through feature development, performance improvements, and production support. The system required
                sustained reliability and iterative modernization to support organizational workflows for members and staff.
            </p>
        </section>
    );
}
