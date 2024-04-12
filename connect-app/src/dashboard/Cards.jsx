
// Flashcards.jsx

import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Link } from "@nextui-org/react";

export default function Cards({ title, subtitle, content, icon: Icon, footer }) {
  return (
    <div className="resources-card-cont">
    <Card className="resources-card">
      <CardHeader>
        {Icon && <Icon className="w-6 h-6 mr-2" />} {/* Render the icon if provided */}
        <div>
          <p className="text-md card-text-title">{title}</p>
          <p className="text-small text-default-500 card-text-subtitle">{subtitle}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <CardFooter>
      <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Learn More.
              </Link>
            </CardFooter>
      </CardFooter>
    </Card>
    </div>
  );
}















