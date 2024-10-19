import { JobInterface } from "../assets/jobs";

export default function Job ({
  role,
  company,
  yearStart,
  yearEnd,
  monthStart,
  monthEnd,
  descriptions
}: JobInterface) {
  const currentlyWorking = !yearEnd || !monthEnd;
  const end = currentlyWorking ? 'Present' : `${monthEnd} ${yearEnd}`
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-lg font-bold">{role} <span className="text-tertiary">at {company}</span></h3>
        <p className="text-sm text-gray-500">{monthStart} {yearStart} - {end}</p>
      </div>
      <ul className="list-disc flex flex-col gap-2 text-md ml-5">
        {
          descriptions?.map(description => <li key={description}>{description}</li>)
        }
      </ul>
    </div>
  )
}
