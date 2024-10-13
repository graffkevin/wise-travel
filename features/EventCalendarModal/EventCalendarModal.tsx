import { Button } from "react-native";
import Modal from "@/components/Layouts/Modal/Modal";
import React from "react";
import Typography from "@/components/DataDisplay/Typography";
import Stack from "@/components/Layouts/Stack";
import IconButton from "@/components/Inputs/IconButton";
import { Divider } from "@rneui/base";

interface EventCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
}

const EventCalendarModal = ({
  isOpen,
  onClose,
  date,
}: EventCalendarModalProps) => {
  return (
    <Modal visible={isOpen} onClose={onClose}>
      <Stack
        direction="row"
        spacing={10}
        style={{
          paddingTop: 0,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>{date}</Typography>
        <IconButton iconName="close" onPress={onClose} />
      </Stack>
      <Stack style={{ marginTop: 10, marginBottom: 10 }}>
        <Divider />
      </Stack>

      {/*<Button*/}
      {/*  title="Ajouter un événement pour le midi"*/}
      {/*  onPress={() => setMealType("lunch")}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  title="Ajouter un événement pour le soir"*/}
      {/*  onPress={() => setMealType("dinner")}*/}
      {/*/>*/}

      {/*{mealType && (*/}
      {/*  <>*/}
      {/*    <TextInput*/}
      {/*      placeholder={`Nom de l'événement pour ${mealType === "lunch" ? "le midi" : "le soir"}`}*/}
      {/*      value={eventText}*/}
      {/*      onChangeText={setEventText}*/}
      {/*      style={styles.input}*/}
      {/*    />*/}
      {/*    <Button title="Ajouter" onPress={addEvent} />*/}
      {/*  </>*/}
      {/*)}*/}
    </Modal>
  );
};

export default EventCalendarModal;
