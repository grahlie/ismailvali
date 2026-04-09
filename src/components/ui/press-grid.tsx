import { PressItem } from "@/types/press";
import Image from "next/image";

export function PressGrid({ items }: Readonly<{ items: PressItem[] }>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items
        .slice()
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={item.logo}
                  alt="Publication logo"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-3 leading-relaxed">
              {item.title}
            </h4>
            <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
              <span>Read Article</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        ))}
    </div>
  );
}
