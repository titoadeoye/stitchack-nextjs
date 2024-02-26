"use client";

import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Wrapper, Label } from "./CustomInput.style";

export default function CustomInput({
  type,
  className,
  leftIcon,
  data,
  span,
  error,
  touched,
  determiner,
  ...others
}) {
  const [see, setSee] = useState(false);
  if (type === "email")
    return (
      <Wrapper error={error} touched={touched} className={className}>
        {leftIcon}
        <input type="email" {...others} />
      </Wrapper>
    );

  if (type === "checkbox")
    return (
      <Label error={error} touched={touched} className={className}>
        <input type="checkbox" {...others} />
        <span style={{ marginLeft: 5 }}>{span}</span>
      </Label>
    );

  if (type === "tel") {
    return (
      <Wrapper style={{ justifyContent: "space-around" }}>
        {others?.lefticon}
        <input type={type} {...others} />
      </Wrapper>
    );
  }

  if (type === "password")
    return (
      <Wrapper error={error} touched={touched} className={className}>
        {leftIcon}
        <input type={see ? "text" : "password"} {...others} />
        {see ? (
          <EyeOutlined
            size={22}
            className="color-white"
            onClick={() => setSee(false)}
          />
        ) : (
          <EyeInvisibleOutlined
            size={22}
            className="color-white"
            onClick={() => setSee(true)}
          />
        )}
      </Wrapper>
    );

  if (type === "select") {
    return (
      <Wrapper>
        <select {...others}>
          {/* <option value="" label={others["placeholder"]} /> */}
          {others?.options &&
            others?.options.map((option) => (
              <option value={option}>{option}</option>
            ))}
        </select>
      </Wrapper>
    );
  }

  if (type === "date") {
    return (
      <Wrapper>
        <input type="date" {...others} />
      </Wrapper>
    );
  }

  if (type === "textarea") {
    return (
      <Wrapper>
        <input type="textarea" {...others} />
      </Wrapper>
    );
  }

  return (
    <Wrapper error={error} touched={touched} className={className}>
      {leftIcon}
      <input type="text" {...others} />
    </Wrapper>
  );
}
