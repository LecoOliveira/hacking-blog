type Tag = {
  name: string;
  color: string;
};

type TagsProps = {
  tag: Tag[];
};

export const colorClasses: Record<string, string> = {
  blue: 'border-blue-200 text-blue-200',
  yellow: 'border-yellow-200 text-yellow-200',
  red: 'border-red-200 text-red-200',
  green: 'border-green-200 text-green-200',
  orange: 'border-orange-200 text-orange-200',
  gray: 'border-gray-200 text-gray-200',
  default: 'border-gray-200 text-gray-200',
  pink: 'border-pink-200 text-pink-200',
  brown: 'border-orange-200 text-yellow-200',
};

export default async function Tags({ tag }: TagsProps) {
  return (
    <div className="absolute flex space-x-2 mb-4 -mt-12">
      {tag?.map((t, index) => (
        <span
          key={index}
          className={`
                      border
                      ${colorClasses[t.color] || 'text-gray-200'} 
                      ${colorClasses[t.color] || 'bg-gray-100'} 
                      text-[9px] font-semibold px-2 py-1 rounded-full 
                      cursor-pointer
                  `}
        >
          {`#${t.name}`}
        </span>
      ))}
    </div>
  );
}
