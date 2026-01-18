import React from "react";

function ListsCard({card, theme}) {

  return (
    <div className="p-6 rounded-2xl" style={{backgroundColor: `rgb(var(--${theme})/10%)`}}>
      <h3
        className={`h3`}
        style={{ color: `rgb(var(--${theme}))` }}
      >
        {card.title}
      </h3>
      <div className="space-y-6">
        {card.listItems.map(item =>
          <div
          className={`border-l-2 pl-4`}
          style={{ borderColor: `rgb(var(--${theme})` }}
        >
          <p className="font-medium">{item.name}</p>
          <div className="flex justify-between mt-1">
            <p className="text-[rgb(var(--black-75))] text-sm">
            {item.listBody}
          </p>
          <p className="text-[rgb(var(--black-75))] text-sm">
            {item.extra}
          </p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default ListsCard;
