import React from "react";
import {
  Description,
  DescriptionTitle,
  DescriptionBody,
  DescriptionText,
  StackIcon,
  TextHolder,
  Text,
} from "./CoinPageDescription.styles";
import stackIcon from "../../images/layer-group.svg";

type Props = {
  profile: string,
}

const CoinPageDescription: React.FunctionComponent<Props> = ({ profile }) => {
  return (
    <>
      <Description>
        <DescriptionTitle>Description</DescriptionTitle>
      </Description>
      <DescriptionBody>
        <DescriptionText>
          <StackIcon src={stackIcon} alt="stack image" />
          <TextHolder>
            <Text
              dangerouslySetInnerHTML={{
                __html: profile.description.en,
              }}
            ></Text>
          </TextHolder>
        </DescriptionText>
      </DescriptionBody>
    </>
  );
};

export default CoinPageDescription;
