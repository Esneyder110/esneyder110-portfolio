interface JobInterface {
  role: string;
  company: string;
  yearStart: string;
  monthStart: string;
  yearEnd?: string;
  monthEnd?: string;
}

export default function Job({
  role,
  company,
  yearStart,
  yearEnd,
  monthStart,
  monthEnd
}: JobInterface) {
  const currentlyWorking = !yearEnd || !monthEnd;
  const end = currentlyWorking ? 'Today' : `${monthEnd} ${yearEnd}`
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-lg font-bold">{role} <span className="text-tertiary">at {company}</span></h3>
        <p className="text-sm text-gray-500">{monthStart} {yearStart} - {end}</p>
      </div>
      <ul className="list-disc flex flex-col gap-2 text-md ml-5">
        <li>Developed a RESTful and GraphQL APIS to allow for interoperability between
          different systems.</li>
        <li>Developed features and optimized existing code to improve application
          scalability.</li>
        <li>Utilized GCP technologies to create a highly available and cost-effective
          backend environment.</li>
        <li>Worked closely with the front-end development team to ensure the smooth
          integration of the backend system.</li>
      </ul>
    </div>
  )
}
