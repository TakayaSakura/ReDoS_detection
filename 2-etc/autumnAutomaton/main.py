# Do imports
import random
import time

from automata.fa.dfa import DFA
from automata.fa.nfa import NFA

# Define regex parameters
num_clauses = 1_000
clause_size = 50

# Define the input symbols and randomly
# construct the regex
input_symbols = ["0", "1"]
raw_regex = "|".join(
    "".join(random.choices(input_symbols, k=clause_size)) for _ in range(num_clauses)
)

# Convert the regex to NFA
start = time.perf_counter()
regex_nfa = NFA.from_regex(raw_regex)
end = time.perf_counter()
print(
    f"Created equivalent NFA with {len(regex_nfa.states):,} states in {end-start:4f} seconds."
)

# Convert to (minimized) DFA
start = time.perf_counter()
regex_dfa = DFA.from_nfa(regex_nfa, minify=True)
end = time.perf_counter()

# Print timing and other information
print(
    f"Created equivalent minimized DFA with {len(regex_dfa.states):,} states in {end-start:4f} seconds."
)
print(f"Number of words accepted by DFA: {len(regex_dfa):,}.")
print(f"Minimum word length accepted by DFA: {regex_dfa.minimum_word_length():,}.")
print(f"Maximum word length accepted by DFA: {regex_dfa.minimum_word_length():,}.")

# DFAの状態を確認する
print(f"DFAの状態数: {len(regex_dfa.states)}")
print(f"開始状態: {regex_dfa.initial_state}")
print(f"受理状態: {regex_dfa.final_states}")

# DFAの遷移関数を確認する
print("\nDFAの遷移関数:")
for state, transitions in regex_dfa.transitions.items():
    for input_symbol, next_state in transitions.items():
        print(f"状態 {state} 入力値{input_symbol} 次の状態{next_state}")