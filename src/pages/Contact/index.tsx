import React from "react";
import { Content } from "../../components/Content/Content";
export const Contact = () => {
  return (
    <Content>
      <div className="embed-responsive embed-responsive-4by3">
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.083035599073!2d100.51410331483208!3d13.893982990255568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e284b1217da409%3A0x9eaa98a3f7a953b9!2sJENOSIZE%20Digital%20Group%20%7C%20Full%20Service%20Digital%20Agency%20in%20Thailand%20%2C%20Social%20Media%20Agency!5e0!3m2!1sth!2sth!4v1596624689109!5m2!1sth!2sth" width="800" height="800" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
          }}
        />
      </div>
    </Content>
  );
};
