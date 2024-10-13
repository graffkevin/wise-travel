import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "@/components/Layouts/Modal/Modal";
import { MarkedDates } from "react-native-calendars/src/types";
import EventCalendarModal from "@/features/EventCalendarModal";

interface DayObject {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface MealEvents {
  lunch?: string;
  dinner?: string;
}

interface Event {
  marked: boolean;
  dotColor: string;
  events: MealEvents;
}

interface Events {
  [date: string]: Event;
}

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [events, setEvents] = useState<Events>({});
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [mealType, setMealType] = useState<"lunch" | "dinner" | null>(null);
  const [eventText, setEventText] = useState<string>("");

  const handleDayPress = (day: DayObject): void => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const addEvent = (): void => {
    if (!mealType) return;

    setEvents((prevEvents) => ({
      ...prevEvents,
      [selectedDate]: {
        marked: true,
        dotColor: "blue",
        events: {
          ...prevEvents[selectedDate]?.events,
          [mealType]: eventText,
        },
      },
    }));
    setModalVisible(false);
    setEventText("");
    setMealType(null);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={Object.keys(events).reduce((acc, date) => {
          acc[date] = { marked: true, dotColor: events[date].dotColor };
          return acc;
        }, {} as MarkedDates)}
      />
      <EventCalendarModal
        date={selectedDate}
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      {selectedDate && events[selectedDate] && (
        <View style={styles.eventContainer}>
          <Text>Événements pour le {selectedDate} :</Text>
          {events[selectedDate].events.lunch && (
            <Text>- Midi : {events[selectedDate].events.lunch}</Text>
          )}
          {events[selectedDate].events.dinner && (
            <Text>- Soir : {events[selectedDate].events.dinner}</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
  eventContainer: {
    paddingTop: 20,
  },
});

export default CalendarScreen;
