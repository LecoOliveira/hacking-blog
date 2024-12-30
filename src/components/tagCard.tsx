import { colorClasses } from './tags';

export default function TagCard({ tag, cor }: { tag: string; cor: string }) {
  return (
    <div
      className={`
        border mr-2 ${
          cor
            ? colorClasses[cor] || 'border-gray-200 text-gray-200'
            : 'border-gray-200 text-gray-200'
        } px-2 py-1 rounded-lg text-[10px] font-semibold w-min
      `}
    >
      {tag ? tag : ''}
    </div>
  );
}
